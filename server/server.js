const express = require('express');
const cors = require('cors')
const app = express();

const PORT = 3001;

app.use(cors())

app.listen(PORT, function() {
  console.log(`listening on ${PORT}`)
})

app.get('/posts', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        items: [
            {
                title: 'Quick-Find. Реализация алгоритма и его визуализация на reactjs',
                shortDescription: 'Реализация первого алогоритма из серии лекций принстонского университета по алгоритмам',
                description: ''
            },
            {
                title: 'Quick-Union. Реализация алгоритма и его визуализация на reactjs',
                shortDescription: 'Реализация второго алогоритма из серии лекций принстонского университета по алгоритмам',
                description: ''
            },
        ]
    }));
})
