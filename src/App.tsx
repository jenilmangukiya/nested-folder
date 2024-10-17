import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

type folder = {
  name: string;
  folders?: folder[];
};

const folders: folder[] = [
  {
    name: "Home",
    folders: [
      {
        name: "Hindi",
        folders: [
          {
            name: "West",
            folders: [
              {
                name: "Movie 1",
              },
            ],
          },
          {
            name: "South",
            folders: [
              {
                name: "Movie 1",
              },
            ],
          },
        ],
      },
      {
        name: "Gujarati",
        folders: [
          {
            name: "Gujarati movie 1",
          },
          {
            name: "Gujarati movie 2",
          },
          {
            name: "Gujarati movie 3",
          },
        ],
      },
      {
        name: "English",
        folders: [
          {
            name: "English movie 1",
          },
        ],
      },
      {
        name: "Tamil",
      },
    ],
  },
];

function App() {
  return (
    <>
      <div className="p-4 inline-block">
        <div className="flex flex-col gap-2 mt-1">
          <Folder folders={folders} />
        </div>
      </div>
    </>
  );
}

const Folder = ({ folders }: { folders: folder[] }) => {
  return (
    <div className="flex flex-col gap-2 mt-1">
      {folders?.map((item) => {
        return (
          <div className="ml-6 text-left" key={item.name}>
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faFolder} />
              {item.name}
            </span>
            <Folder folders={item.folders || []} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
