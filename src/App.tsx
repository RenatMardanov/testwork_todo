import { useState } from "react";
import { Categories, ITodo, addTodo } from "./store/todos/todos.slice";
import { Category } from "./components/category";
import { CategoryButton } from "./components/categoryButton";
import { Task } from "./components/task";
import { GoTasklist } from "react-icons/go";
import { CiShoppingBasket } from "react-icons/ci";
import { CiBasketball } from "react-icons/ci";
import { GiVacuumCleaner } from "react-icons/gi";
import { useCategoryCounts } from "./hooks/useCategoryCounts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import Dialog from "./components/Dialog";
import { AddEditForm } from "./components/addEditForm";
import { IoIosAdd } from "react-icons/io";

function App() {
    const [selectedCategory, setSelectedCategory] = useState<Categories | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const todos = useSelector((state: RootState) => state.todos);

    const categoryCounts = useCategoryCounts();

    const handleCategorySelect = (category: Categories | null) => {
        setSelectedCategory(category);
    };
    const dispatch = useDispatch();

    const handleSubmit = (data: ITodo) => {
        dispatch(
            addTodo({
                ...data,
            })
        );
        setOpen(false);
    };

    const filteredTodos = selectedCategory
        ? todos.filter((todo: ITodo) => todo.category === selectedCategory)
        : todos;

    return (
        <div>
            <div className="container m-auto px-3 min-w-80 transition-all duration-250 relative">
                <h1 className="text-2xl font-bold mb-5 mt-9">Todo list</h1>
                <div className="flex flex-wrap gap-3 justify-between mb-8">
                    <CategoryButton
                        onClick={() => handleCategorySelect(Categories.WORK)}
                        color="bg-teal-400"
                        active={selectedCategory === Categories.WORK}
                    >
                        <Category
                            count={categoryCounts[Categories.WORK]}
                            name="Задачи"
                            icon={<GoTasklist size={25} />}
                        />
                    </CategoryButton>
                    <CategoryButton
                        onClick={() => handleCategorySelect(Categories.SHOPPING)}
                        color="bg-emerald-400"
                        active={selectedCategory === Categories.SHOPPING}
                    >
                        <Category
                            count={categoryCounts[Categories.SHOPPING]}
                            name="Шопинг"
                            icon={<CiShoppingBasket size={25} />}
                        />
                    </CategoryButton>
                    <CategoryButton
                        onClick={() => handleCategorySelect(Categories.SPORT)}
                        color="bg-violet-400"
                        active={selectedCategory === Categories.SPORT}
                    >
                        <Category
                            count={categoryCounts[Categories.SPORT]}
                            name="Занятия спортом"
                            icon={<CiBasketball size={25} />}
                        />
                    </CategoryButton>
                    <CategoryButton
                        onClick={() => handleCategorySelect(Categories.HOME)}
                        color="bg-slate-400"
                        active={selectedCategory === Categories.HOME}
                    >
                        <Category
                            count={categoryCounts[Categories.HOME]}
                            name="Дела по дому"
                            icon={<GiVacuumCleaner size={20} />}
                        />
                    </CategoryButton>
                </div>
                <h2 className="text-xl font-bold mb-4">Дела на сегодня:</h2>
                <ul>
                    {filteredTodos.map((todo, index) => {
                        return <Task task={todo.task} key={index} index={index} />;
                    })}
                </ul>
                <button
                    onClick={() => setOpen(true)}
                    className="fixed flex items-center justify-center bottom-8 right-8 p-4 rounded-full bg-blue-500 text-white"
                >
                    <IoIosAdd />
                </button>
            </div>
            {open && (
                <Dialog onOpen={open}>
                    <AddEditForm
                        buttonText="Добавить"
                        onSubmit={handleSubmit}
                        onClose={() => setOpen(false)}
                    />
                </Dialog>
            )}
        </div>
    );
}

export default App;
