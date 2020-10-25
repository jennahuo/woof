Page({

  // ----- Page Data -----
  data: {
    test: "Hello, ",
    select: false,
    country:'USA'

 
  },

  // ----- Custom Functions -----
  fetchData: function () {
    //const [lastest,setLatest]=use([]);
    const [results,setResults]= useState([]);
    
    useEffect(()=>{
      axios
      .get("https://coronavirus-19-api.herokuapp.com/countries")
      .then(responseArr => {
        setResults(responseArr[0].data);
      })
      .catch(err => {
        console.log(err);
      }) ;    
},[]);

const date = new Date(parseInt(atest.updated));
const lastUpdated = date.toString();
  }
})