export default class ProjectError extends Error {
    private _status: number = 0;
    private _data: object = {};
    
    public get statusCode() : number {
        return this._status;
    }
    
    public set statusCode(code : number) {
        this._status = code;
    }

    public get data(): object {
        return this._data
    }
    
    public set data(data : object) {
        this._data = data;
    }
    
}