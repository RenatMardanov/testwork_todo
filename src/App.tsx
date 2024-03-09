import { useState } from "react";
import { Categories, ITodo, addTodo, editTodo } from "./store/todos/todos.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import {
    AddEditForm,
    Category,
    CategoryButton,
    CategoryItem,
    Container,
    Dialog,
    FillTitle,
    Header,
} from "./components";
import { GoTasklist } from "react-icons/go";
import { CiBasketball, CiShoppingBasket } from "react-icons/ci";
import { Task } from "./components/task";
import { IoIosAdd } from "react-icons/io";
import { MdDone } from "react-icons/md";

export interface IOpenHandler {
    status: boolean;
    obj?: ITodo;
    index?: number;
}
function App() {
    const [selectedCategory, setSelectedCategory] = useState<Categories | null>(Categories.WORK);
    const [open, setOpen] = useState<IOpenHandler>({
        status: false,
    });
    const todos = useSelector((state: RootState) => state.todos);

    const getIndex = (todo: ITodo) => {
        return todos.indexOf(todo);
    };

    const handleCategorySelect = (category: Categories | null) => {
        setSelectedCategory(category);
    };
    const dispatch = useDispatch();

    const handleSubmit = (data: ITodo) => {
        dispatch(addTodo(data));
        setOpen({ status: false });
    };

    const handleEdit = (index: number, data: ITodo) => {
        dispatch(editTodo({ index, todo: data }));
        setOpen({ status: false });
    };

    const filteredTodos: ITodo[] = selectedCategory
        ? todos.filter((todo: ITodo) => {
              if (selectedCategory === Categories.DONE) {
                  return todo.isDone === true;
              } else {
                  return todo.category === selectedCategory && !todo.isDone;
              }
          })
        : todos;

    const categoryCounts = {
        [Categories.WORK]: todos.filter((todo) => todo.category === Categories.WORK && !todo.isDone)
            .length,
        [Categories.SHOPPING]: todos.filter(
            (todo) => todo.category === Categories.SHOPPING && !todo.isDone
        ).length,
        [Categories.SPORT]: todos.filter(
            (todo) => todo.category === Categories.SPORT && !todo.isDone
        ).length,
        [Categories.DONE]: todos.filter((todo) => todo.isDone).length,
    };
    return (
        <>
            <Container>
                <Header header={"Todo list"} />
                <Category>
                    <CategoryButton
                        onClick={() => handleCategorySelect(Categories.WORK)}
                        color="bg-teal-400"
                        active={selectedCategory === Categories.WORK}
                    >
                        <CategoryItem
                            count={categoryCounts[Categories.WORK]}
                            name={Categories.WORK}
                            icon={<GoTasklist size={25} />}
                        />
                    </CategoryButton>
                    <CategoryButton
                        onClick={() => handleCategorySelect(Categories.SHOPPING)}
                        color="bg-emerald-400"
                        active={selectedCategory === Categories.SHOPPING}
                    >
                        <CategoryItem
                            count={categoryCounts[Categories.SHOPPING]}
                            name={Categories.SHOPPING}
                            icon={<CiShoppingBasket size={25} />}
                        />
                    </CategoryButton>
                    <CategoryButton
                        onClick={() => handleCategorySelect(Categories.SPORT)}
                        color="bg-violet-400"
                        active={selectedCategory === Categories.SPORT}
                    >
                        <CategoryItem
                            count={categoryCounts[Categories.SPORT]}
                            name={Categories.SPORT}
                            icon={<CiBasketball size={25} />}
                        />
                    </CategoryButton>
                    <CategoryButton
                        onClick={() => handleCategorySelect(Categories.DONE)}
                        color="bg-slate-400"
                        active={selectedCategory === Categories.DONE}
                    >
                        <CategoryItem
                            count={categoryCounts[Categories.DONE]}
                            name={Categories.DONE}
                            icon={<MdDone size={20} />}
                        />
                    </CategoryButton>
                </Category>
                <FillTitle title="Дела на сегодня: " />
                <ul>
                    {filteredTodos.map((todo) => {
                        return (
                            <Task
                                task={todo}
                                onEdit={setOpen}
                                key={getIndex(todo)}
                                index={getIndex(todo)}
                            />
                        );
                    })}
                </ul>
                <button
                    onClick={() => setOpen({ ...open, status: true })}
                    className="fixed flex items-center justify-center bottom-8 right-8 p-4 rounded-full bg-blue-500 text-white"
                >
                    <IoIosAdd />
                </button>
                {open && (
                    <Dialog onOpen={open.status}>
                        <AddEditForm
                            onSubmit={handleSubmit}
                            onEdit={handleEdit}
                            onClose={() => setOpen({ status: false })}
                            todo={open.obj}
                            index={getIndex(open.obj!)}
                        />
                    </Dialog>
                )}
            </Container>
        </>
    );
}

export default App;
