import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";


export default NextAuth({
        providers: [
            GoogleProvider({
              clientId:'72464777062-aig9lehukpcf5ptvhaejnlg13alhejm5.apps.googleusercontent.com',
              clientSecret: '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',
            }),
            FacebookProvider({
              clientId:'950247109611197',
              clientSecret: 'b01c223239d232f0e2259b5e5a02a927',
            }),


    ]
})