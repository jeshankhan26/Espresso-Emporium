import { useLoaderData } from "react-router";

const Dashboard = () => {
    const data=useLoaderData()
    console.log(data.length)
  return (
    <>
    <div className="min-h-screen">
      <div className="grid md:grid-cols-3 gap-5 mt-5 px-20">
      {/* Card 1 */}
      <div className="card bg-primary text-primary-content w-full">
        <div className="card-body">
          <h2 className="card-title">Active Users</h2>
          <p>Total Users: {data.length} </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card bg-secondary text-secondary-content w-full">
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component includes a body, title, and action buttons. Tailor
            this for any content.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card bg-accent text-accent-content w-full">
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            You can customize this card to show analytics, stats, or summaries
            about your platform.
          </p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Dashboard;
