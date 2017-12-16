import ProfController from '../controllers/professores';

export default(app)=>{
	const profController = new ProfController(app.datasource.models.Professor);
	app.route('/professores')
	.get((req, res)=> {
		profController.getAll().then(response => {
			res.status(response.statusCode)
			res.json(response.data)
		});

	})
	.post((req, res)=>{
		profController.create(req.body).then(response =>{
			res.status(response.statusCode);
			res.json(response.data);
		});
	});

	app.route('/professores/:cpf')
	.get((req, res)=> {
		profController.getById(req.params).then(response => {
			res.status(response.statusCode)
			res.json(response.data)
		});
	})

	.put((req, res)=> {
		profController.update(req.body, req.params).then(response => {
			res.status(response.statusCode)
			res.json(response.data)
		});
	})
	.delete((req, res)=> {
		profController.delete(req.params).then(response => {
			res.status(response.statusCode);
			res.json(response.data);
		});
	});
}