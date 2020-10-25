Page({
  navigateToCountry: function () {
    wx.navigateTo({
      url:'/pages/country/country',
    })
  },
  // ----- Page Data -----
  data: {
    test: "Hello World!"
  },
  
  // ----- Custom Functions -----
  fetchData: function () {
    wx.request({
      url:'https://coronavirus-19-api.herokuapp.com/all',
      success:(res)=>{
        //console.log(res);
        let results = res.data;
        this.setData({results});
   
    }
  })
},

  // ----- Lifecycle Function -----
  onLoad: function () {
  }
})