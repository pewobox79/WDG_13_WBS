import ToDoListItem from "./components/ToDoListItem";

export default function ToDoListReview() {

    const toDoArray = [
        {
            title: "item1",
            uid: "234 - 567"
        },
        {
            title: "item2",
            uid: "232 - 597"
        },
        {
            title: "item3",
            uid: "134 - 560"
        }
    ];


    const ListOfToDos = toDoArray.map((item)=>{
        return <ToDoListItem key={item.uid} title={item.title} id={item.uid} />
    });




    return (
        <>
        <h1>review</h1>
        {ListOfToDos}
        </>
    )
}