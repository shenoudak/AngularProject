export class Job
{
    id:number=0;
    jobTitle:string;
    jobDescription:string;
    constructor(jobTitle:string,jobDescription:string){
        this.jobTitle=jobTitle;
        this.jobDescription=jobDescription;
    }

}