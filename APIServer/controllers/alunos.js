import httpStatus from 'http-status';

const defaultResponse = (data, statusCode = httpStatus.OK) => ({
	data,
	statusCode,
});

const errorResponse = (message, statusCode = httpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class AlunoController{
	constructor(Aluno){
		this.Aluno = Aluno;
	}
	getAll(){
		return this.Aluno.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}
	getById(params){
		return this.Aluno.findOne({where: params})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}
	create(data){
		return this.Aluno.create(data)
		.then(result=> defaultResponse(result, httpStatus.CREATED))
		.catch(error => errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params){
		return this.Aluno.update(data,{where:params})
		.then(result=> defaultResponse(result))
		.catch(error => errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));
	}
	delete(params){
		return this.Aluno.destroy({where: params})
		.then(result => defaultResponse(result, httpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));	
	}
}
export default AlunoController;