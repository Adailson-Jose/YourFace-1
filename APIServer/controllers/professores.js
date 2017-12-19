import httpStatus from 'http-status';

const defaultResponse = (data, statusCode = httpStatus.OK) => ({
	data,
	statusCode,
});

const errorResponse = (message, statusCode = httpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class ProfessorController{
	constructor(Professor){
		this.Professor = Professor;
	}
	getAll(){
<<<<<<< HEAD
		return this.Professor.findAll({where: {"ativo":true}})
=======
		return this.Professor.findAll({})
>>>>>>> 41dbc599341086fb98c2311c62b0e6e84d3516c8
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}
	getById(params){
		return this.Professor.findOne({where: params})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data){
		return this.Professor.create(data)
		.then(result=> defaultResponse(result, httpStatus.CREATED))
		.catch(error => errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));
	}
	update(data, params){
		return this.Professor.update(data,{where:params})
		.then(result=> defaultResponse(result))
		.catch(error => errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params){
<<<<<<< HEAD

		return this.Professor.update({"ativo":false} ,{where:params})
		.then(result=> defaultResponse(result))
		.catch(error => errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));

		/*return this.Professor.destroy({where: params})
		.then(result => defaultResponse(result, httpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));*/	
=======
		return this.Professor.destroy({where: params})
		.then(result => defaultResponse(result, httpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));	
>>>>>>> 41dbc599341086fb98c2311c62b0e6e84d3516c8
	}
}
export default ProfessorController;