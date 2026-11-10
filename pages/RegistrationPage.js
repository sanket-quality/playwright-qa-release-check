class RegistrationPage{


constructor(page) {
    this.page = page;

    this.emailField = this.page.getByPlaceholder('you@email.com');

    this.passwordField = this.page.getByPlaceholder(
        'Min 8 chars, uppercase, number & symbol'
    );

    this.confirmPasswordField = this.page.getByPlaceholder(
        'Repeat your password'
    );
    this.createAccountButton = this.page.getByRole('button',{name: 'Create Account'});
}

async gotoRegisterPage(){
    await this.page.goto('/register');
}
async fillRegistrationForm(email, password, confirmPassword){
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.confirmPasswordField.fill(confirmPassword);
}

async createAccount(){
    await this.createAccountButton.click();
}

async navigateToSignInLink(){
    await this.page.getByRole('link',{name: "Sign in"}).click();
}

}

module.exports= {RegistrationPage}