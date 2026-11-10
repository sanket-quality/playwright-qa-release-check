class LoginPage{

constructor(page){
   this.page = page;
   this.emailTextbox = this.page.getByPlaceholder("you@email.com");
   this.passwordTextbox = this.page.getByPlaceholder("••••••");
   this.signInButton = this.page.getByRole('button',{name:'Sign In'});

}

async gotoLoginPage(){
    await this.page.goto("/login");
}
async enterCredentials(email,password){
await this.emailTextbox.fill(email);
await this.passwordTextbox.fill(password);
}

async signIn(){
    await this.signInButton.click(); 
}

async navigateToRegisterPage(){
    await this.page.getByRole('link',{name:'Register'}).click();
}

}

module.exports = {LoginPage};