import { useEffect, useState } from "react";
import { DashbaordCard } from "./components/DashboardCard"
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getOrders } from "../../services";
import { useTitle } from "../../hooks/useTitle";
import { toast } from "react-toastify";

export const DashboardPage = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getAllOrders() {

      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        { toast.error("Sorry, Failed to fetch the order data") }
      }
    }
    getAllOrders();
  }, []);

  useTitle("Dashboard - CodeBook");

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
        {orders.length
          ?
          <div>
            {orders.map((order) => (
              <DashbaordCard key={order.id} order={order} />
            ))}
          </div>
          :
          <div>
            <DashboardEmpty />
          </div>
        }

      </section>
    </main>
  )
}
