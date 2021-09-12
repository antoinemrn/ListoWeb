interface Task {
    id : number;
    name :string;
    description: string;
    date : string;
    timeLeft : number;
    duration: number;
    tags : string[];
}

export default Task;