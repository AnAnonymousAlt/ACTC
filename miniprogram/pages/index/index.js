//index.js
const app = getApp()

Page({
  data: {
    cdlist: [],
    testtext: "hello"
  },

  onLoad: async function()  {
    const db = wx.cloud.database()
    let tasks = []
    for (let i = 0; i < 5; i++) {
      const promise = db.collection('cd').skip(i*20).limit(20).get()
      tasks = tasks.concat(promise)
    }
    const f1 = (prelist) => {
      let list = []
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < prelist[i].data.length; j++) {
          list.push(prelist[i].data[j])
        }
      }
      return list
    }
    let x = await f1(await Promise.all(tasks))


    let namelist = new Array
    for (let i = 0; i < 95; i++) {
      namelist.push(x[i].name)
    }
    console.log(x)
    console.log(namelist)
    this.setData({
      cdlist: namelist
    })
  },
  

  
})
