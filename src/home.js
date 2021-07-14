const Home = () => {

    const handleClick=()=>
    {
        console.log('clicked')
    }
     const handleClickagain=(name)=>
     {
         console.log("hello"+name)
     }
    return ( 
        <div className="home">
            <h2>HOMEPAGE</h2>
            <button onClick={handleClick}>CLICK ME</button>
            <button onClick={()=>handleClickagain('mario')}>CLICK ME AGAIN</button>
        </div>
     );
}
 
export default Home;