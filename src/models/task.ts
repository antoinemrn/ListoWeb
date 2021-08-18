interface Task {
    id : number;
    name :string;
    description: string;
    date : string;
    progress : number;
    duration: number;
    tags : string[];
}

export default Task;