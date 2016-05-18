function something() {
    var x = window.localStorage.getItem('aaa');
    x = x * 1 + 1;
    window.localStorage.setItem('aaa', x);
    alert (x);
}

function add_to_cart(id) {
    var key = 'product_' + id;
    var x = window.localStorage.getItem(key);

    x = x * 1 + 1;
    window.localStorage.setItem(key, x);
    get_number_of_products();
}

function get_number_of_products() {
    var total = 0;

    for (var i = 0; i < window.localStorage.length; i++) {
        var key = window.localStorage.key(i);

        if (key.search('product_')>= 0)
        {
            total = total*1 + window.localStorage[key]*1;
        }
    }
    document.getElementById('basket').innerHTML = "Your basket contains " + total + " items";
}

function basket_clear() {
    total = 0;
    localStorage.clear();
    document.getElementById('basket').innerHTML = "Your basket contains " + total + " items";
}


function get_number_of_orders() {
    var orders = '';

    for (var i = 0; i < window.localStorage.length; i++) {
        var key = window.localStorage.key(i);
        var value = window.localStorage.getItem(key);

        if (key.search('product_')>= 0)
        {
            orders = orders + key + '=' + value + ',';
        }
    }
    return orders;

}