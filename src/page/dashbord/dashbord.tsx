import { InfoCartProps } from "../../component/shared/info-cart/data-access/info-cart";
import InfoCart from "../../component/shared/info-cart/ui/info-cart";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PersonIcon from "@mui/icons-material/Person";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import Loader from "../../component/loader/loader";
import { useGetDashbordInfoQuery } from "../../api/books/books";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CreateIcon from '@mui/icons-material/Create';
const Dashbord = () => {
  const { data: booksData , isLoading } = useGetDashbordInfoQuery({});
  
  const CartInfo: InfoCartProps[] = [
    {
      title: "Books",
      icon: <LibraryBooksIcon sx={{ color: "#c3c3c3", fontSize: "36px" }} />,
      count: booksData?.countOfBooks,
      className: "books-count",
      bgColor: "#fff",
      borderRadius: "5px",
      padding: "10px 15px",
      margin: "10px",
      width: "",
      height: "100px",
    },
    {
      title: "Users",
      icon: <PersonIcon sx={{ color: "#c3c3c3", fontSize: "36px" }} />,
      count: booksData?.countOfUser,
      className: "Users",
      bgColor: "#fff",
      borderRadius: "5px",
      padding: "10px 15px",
      margin: "10px",
      width: "",
      height: "100px",
    },
    {
      title: "Publishers",
      icon: <AddBusinessIcon sx={{ color: "#c3c3c3", fontSize: "36px" }} />,
      count: booksData?.countOfPublishers,
      className: "something",
      bgColor: "#fff",
      borderRadius: "5px",
      padding: "10px 15px",
      margin: "10px",
      width: "",
      height: "100px",
    },
    {
      title: "Authors",
      icon: <CreateIcon sx={{ color: "#c3c3c3", fontSize: "36px" }} />,
      count: booksData?.countOfAuthors,
      className: "something",
      bgColor: "#fff",
      borderRadius: "5px",
      padding: "10px 15px",
      margin: "10px",
      width: "",
      height: "100px",
    },
  ];


  return (
    <>
      {
         isLoading ? <Loader /> :  
        <div className="my-[30px] sm:p-4 sm:flex gap-0 items-center flex-wrap">
          {CartInfo.map((item, key) => (
            <div className="sm:w-[calc(100%/2)]" key={key}>
              <InfoCart
                className={`${item.className}-${key}`}
                bgColor={item.bgColor}
                borderRadius={item.borderRadius}
                padding={item.padding}
                margin={item.margin}
                width={item.width}
                height={item.height}
                icon={item.icon}
                title={item.title}
                count={item.count}
              />
            </div>
          ))}
          
        </div>
      }
    </>
  );
};

export default Dashbord;
