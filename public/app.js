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
    // get_number_of_products();
    update_input_orders();
    update_orders_button();
}

function get_number_of_products() {
    var total = 0;

    for (var i = 0; i < window.localStorage.length; i++) {
        var key = window.localStorage.key(i);
        var value = window.localStorage.getItem(key);

        if (key.indexOf('product_')== 0)
        {
            total = total + value*1;
        }
    }
    // document.getElementById('basket').innerHTML = "Your basket contains " + total + " items";
    return total;
}

function basket_clear() {
    var total = 0;
    localStorage.clear();
    document.getElementById('basket').innerHTML = "Your basket contains " + total + " items";
    update_input_orders();
    update_orders_button();
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

function update_input_orders() {
    var orders = get_number_of_orders();
    $('#orders_input').val(orders);
}

function update_orders_button(){
    var text = 'Cart (' + get_number_of_products() + ')';
    $('#orders_button').val(text);
}

function cancel_order() {
    alert('Aaa');
    return false;
}

//
// function cart_display() {
//     var total = get_number_of_products();
//     $('#table').val(total);
// }