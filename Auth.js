
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login Successful!');
    var modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
    modal.hide();
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Signup Successful!');
    var modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
    modal.hide();
});



const buy = document.getElementById('addcart');
buy.addEventListener('click', () => {
    alert('Product has been added!');
});

