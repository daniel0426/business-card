import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    GithubAuthProvider,
    signOut,
} from "firebase/auth";


class AuthService{
    constructor(app){
        this.firebaseAuth = getAuth(app);
        this.googleProvider = new GoogleAuthProvider();
        this.githubProvider = new GithubAuthProvider();
    }

    
     login(providerName){
            const authProvider = this.getProvider(providerName)
            return  signInWithPopup(this.firebaseAuth, authProvider)
    }

    logout(){
        this.firebaseAuth.signOut();
    }

    onAuthChange(onUserChanged) {
        this.firebaseAuth.onAuthStateChanged(user => onUserChanged(user) )
    }

    getProvider(providerName){
        switch(providerName){
            case 'Sign in with Google' :
                return this.googleProvider;
            case 'Sign in with Github' :
                return this.githubProvider;
            default : 
            throw new Error(`not supported provider : ${providerName} `)
        }
    }
}

export default AuthService