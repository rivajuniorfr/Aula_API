const app   =  require('./scr/app');
const port  = 4000;

app.listen ( port, () => {

    console.log (`App rodando na porta ${port}`)
});
