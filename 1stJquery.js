$(document).ready(function() {
    const SignUpButton = $('#SignUpButton');
    const SignInButton = $('#SignInButton');
    const AdminButton = $('#AdminButton');
    const CustomerSignInButton = $('#CustomerSignIn');
    const AdminForm = $('#Admin');
    const SignUpForm = $('#signup');
    const SignInForm = $('#signin');

    SignUpButton.click(function(){
        SignInForm.hide();
        SignUpForm.show();
    });

    SignInButton.click(function(){
        SignUpForm.hide();
        SignInForm.show();
    });

    AdminButton.click(function(){
        AdminForm.show();
        SignInForm.hide();
    });

    CustomerSignInButton.click(function(){
        AdminForm.hide();
        SignInForm.show();
    });
});
