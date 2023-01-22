import Modal from "ui/components/Modal/Modal";
import { Link } from "components/Projects/ProjectsHelpers";
import AstronautJellyfish from "assets/images/projects/astronaut jellyfish.jpg";

type CardProps = {
  header: string;
  description: string;
  buttonText?: string;
  i: number;
  links: Link[];
  image?: string;
  withModal: boolean;
};

const Card = ({
  header,
  description,
  buttonText = "See More",
  i,
  links,
  image = AstronautJellyfish,
  withModal = false,
}: CardProps) => {
  return (
    <div className="card bg-base-100 w-8/12 md:w-11/12 lg:w-full shadow-xl dark:border-white dark:border-2 dark:text-black">
      <figure>
        <img src={image} className="object-cover h-40 w-full" alt={image} />
      </figure>
      <div className="card-body h-64">
        <div className="text-2xl font-semibold truncate ..." title={header}>
          {header}
        </div>
        <div className="line-clamp-4" title={description}>
          {description}
        </div>
        {withModal && (
          <div className="card-actions justify-end absolute bottom-4 right-4">
            <label
              htmlFor={`my-modal-${i}`}
              className="btn btn-outline btn-primary"
            >
              {buttonText}
            </label>
          </div>
        )}
      </div>
      {withModal && (
        <Modal
          header={header}
          description={description}
          i={i}
          links={links}
          image={image}
        />
      )}
    </div>
  );
};

export default Card;