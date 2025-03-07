import { createContext, useState } from "react";
import { baseUrl } from '../baseUrl';

export const Appcontext=createContext();

export default function AppContextProvider({children}) {
    const[loading,setloading]=useState(false);
    const[posts,setposts]=useState([]);
    const[page,setpage]=useState(1);
    const[totalpages,setTotalpages]=useState(null);

    async function fetchblogpost(page =1) {
        setloading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result=await fetch(url);
            const data=await result.json();
            console.log(data);
            setpage(data.page);
            setposts(data.posts);
            setTotalpages(data.totalpages);
        }
        catch(error){
            console.log("error in fetching Data");
            setpage(1);
            setposts([]);
            setTotalpages(null)
        }
        setloading(false);
    }

    function handlepage(page){
        setpage(page);
        fetchblogpost(page);
    }

    const value={
        loading,
        setloading,
        posts,
        setposts,
        page,
        setpage,
        totalpages,
        setTotalpages,
        fetchblogpost,
        handlepage
    };

    return<Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>
}