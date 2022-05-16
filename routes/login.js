module.exports = (app)=>{
    //abri p arquivo
    app.get('/login', (req,res)=>{
        res.render('login.ejs')
    })
}