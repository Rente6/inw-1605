module.exports = (app)=>{
    //abri p arquivo
    app.get('/registro', (req,res)=>{
        res.render('registro.ejs')
    })
}