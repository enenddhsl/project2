import Top from "./Top";


export default function Layout({children}){
    return(
        <>
            <Top/>
            {children}
        </>
    )
}