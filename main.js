import axios from "axios";

(() => {
  const data = {
    currencyFrom: "",
    currencyTo: "",
    priceFrom: null,
    priceTo: null,
    isLoading: false
  };

  console.log("Env", import.meta.env);

  const dataHandler = {
    get() {
      return Reflect.get(...arguments);
    },
  };

  const dataProxy = new Proxy(data, dataHandler);

  let dropdownElements = [];
  document.querySelectorAll(".dropdown[data-role=select]").forEach((elem) => {
    dropdownElements.push(elem);
  });

  const highlightOption = (dropdown, itemId) => {
    const items = dropdown.querySelectorAll(".dropdown-item");

    for (let item of items) {
      item.classList.remove("active-option");
    }

    if (items[itemId - 1]) {
      items[itemId - 1].classList.add("active-option");
      return true;
    }

    return false;
  };

  const setSelectValue = (select, value, item) => {
    const btn = select.querySelector(".dropdown-toggle");
    select.dataset["value"] = value;
    btn.innerHTML = item.innerHTML;
    dataProxy[select.id] = value;
  };

  const initButton = (dropdown) => {
    const firstListItem = dropdown.querySelector(".dropdown-item");

    if (firstListItem) {
      highlightOption(dropdown, 1);
      setSelectValue(dropdown, firstListItem.dataset.value, firstListItem);
    } else {
      btn.innerHTML = "Dropdown";
    }

    return;
  };

  const actOnItems = function (dropdown, func) {
    const items = dropdown.querySelectorAll(".dropdown-item");

    for (let i = 0; i < items.length; i++) {
      func(items[i], i);
    }

    return true;
  };

  const initEvents = (dropdown) => {
    const itemClickEventListener = (e, i, item) => {
      let val = item.dataset.value;
      setSelectValue(dropdown, val, item);
      highlightOption(dropdown, i + 1);
    };
    dropdown.addEventListener("show.bs.dropdown", (e) => {
      actOnItems(dropdown, (item, i) => {
        item.addEventListener("click", (e) =>
          itemClickEventListener(e, i, item)
        );
      });
    });

    dropdown.addEventListener("hide.bs.dropdown", () => {
      actOnItems(dropdown, (item, i) => {
        item.removeEventListener("click", (e) =>
          itemClickEventListener(e, i, item)
        );
      });
    });
  };

  dropdownElements.forEach((dropdown) => {
    initButton(dropdown);
    initEvents(dropdown);
  });

  document.getElementById('priceFrom_number').addEventListener('input', (e) => {
    dataProxy.priceFrom = e.target.value
  })

  const makeRequest = () => {
    return axios.get(
      `https://min-api.cryptocompare.com/data/price?fsym=${dataProxy.currencyFrom}&tsyms=NGN,USDT,BTC,ETH`,
      {
        headers: {Authorization: 'Apikey' + import.meta.env.VITE_API_KEY}
      }
    ).then(res => 
        res.data
    ).catch(e => {throw e})
  };

  const setCurrencyToData = (data) => {
    setLoading(false)
    dataProxy['priceTo'] = data[dataProxy['currencyTo']] * dataProxy['priceFrom']
    document.getElementById('priceTo_number').value = dataProxy['priceTo']
    clearToError()
    console.log(dataProxy);
  }

  const isValidPrice = (price) => {
    return !Number.isNaN(Number(price))
  }

  const displayFromError = (msg) => {
    let validationPlace = document.getElementById('priceFrom_validate')
    validationPlace.textContent = msg
    validationPlace.style.visibility = 'visible'
    validationPlace.style.opacity = '1'
  }

  const clearFromError = () => {
    let validationPlace = document.getElementById('priceFrom_validate')
    validationPlace.textContent = ''
    validationPlace.style.visibility = 'hidden'
    validationPlace.style.opacity = '0'
  }

  const displayToError = (msg) => {
    let validationPlace = document.getElementById('priceTo_validate')
    validationPlace.textContent = msg
    validationPlace.style.visibility = 'visible'
    validationPlace.style.opacity = '1'
  }

  const clearToError = () => {
    let validationPlace = document.getElementById('priceTo_validate')
    validationPlace.textContent = ''
    validationPlace.style.visibility = 'hidden'
    validationPlace.style.opacity = '0'
  }

  const setLoading = (bool) => {

  }

  const compareBtn = document.querySelector('#convert-prices')
  compareBtn.addEventListener('click', (e) => {
    if (dataProxy.priceFrom && isValidPrice(dataProxy.priceFrom)){
      setLoading(true)
      makeRequest().then((data) => setCurrencyToData(data)).catch(e => {setLoading(false);displayToError('Could not fetch prices'); setTimeout(() => clearToError(), 3000)})
    } 
    else{
      displayFromError("Please input a valid price")
      setTimeout(() => clearFromError(), 5000)
    }
  })
})();
