// // App.js

// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [choosePrice, setChoosePrice] = useState('');
//   const [chooseDish, setChooseDish] = useState('');
//   const [chooseTable, setChooseTable] = useState('table1');
//   const [orders, setOrders] = useState({
//     table1: [],
//     table2: [],
//     table3: []
//   });

//   useEffect(() => {
//     const ordersFromLocalStorage = JSON.parse(localStorage.getItem('orders'));
//     if (ordersFromLocalStorage) {
//       setOrders(ordersFromLocalStorage);
//     }
//   }, []);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     const newOrder = {
//       price: choosePrice,
//       dish: chooseDish,
//       table: chooseTable
//     };

//     const updatedOrders = { ...orders, [chooseTable]: [...orders[chooseTable], newOrder] };
//     setOrders(updatedOrders);
//     localStorage.setItem('orders', JSON.stringify(updatedOrders));

//     clearFields();
//   };

//   const clearFields = () => {
//     setChoosePrice('');
//     setChooseDish('');
//     setChooseTable('table1');
//   };

//   const handleDelete = (table, index) => {
//     const updatedOrders = { ...orders, [table]: orders[table].filter((order, i) => i !== index) };
//     setOrders(updatedOrders);
//     localStorage.setItem('orders', JSON.stringify(updatedOrders));
//   };

//   return (
//     <div className="container">
//       <div className="inputs">
//         <form onSubmit={handleFormSubmit} className="row g-3">
//           <div className="col-md-3">
//             <div className="mb-3">
//               <label htmlFor="choose-price" className="form-label">Choose Price</label>
//               <input type="number" className="form-control" value={choosePrice} onChange={(e) => setChoosePrice(e.target.value)} id="choose-price" placeholder="Price" />
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="mb-3">
//               <label htmlFor="choose-dish" className="form-label">Choose Dish</label>
//               <input type="text" className="form-control" value={chooseDish} onChange={(e) => setChooseDish(e.target.value)} id="choose-dish" placeholder="Dish" />
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="mb-3">
//               <label htmlFor="choose-table" className="form-label">Choose Table</label>
//               <select name="choose-table" value={chooseTable} onChange={(e) => setChooseTable(e.target.value)} id="choose-table" className="form-select">
//                 <option value="table1">Table 1</option>
//                 <option value="table2">Table 2</option>
//                 <option value="table3">Table 3</option>
//               </select>
//             </div>
//           </div>
//           <div className="col-md-3 text-end">
//             <button type="submit" className="add-to-bill">Add to Bill</button>
//           </div>
//         </form>
//       </div>

//       <div className="outputs">
//         <h2>Orders</h2>
//         {Object.keys(orders).map((table, index) => (
//           <div key={index} className={`table-${table.slice(-1)}`}>
//             <h4>Table {table.slice(-1)}</h4>
//             <ul className={`table${table.slice(-1)}-ul`}>
//               {orders[table].map((order, idx) => (
//                 <li key={idx} className="list-items">{order.dish} - ${order.price}
//                   <button className="btn btn-dark delete-btn" onClick={() => handleDelete(table, idx)}>Delete</button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// App.js

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [uniqueOrderId, setUniqueOrderId] = useState('');
  const [choosePrice, setChoosePrice] = useState('');
  const [chooseDish, setChooseDish] = useState('');
  const [chooseTable, setChooseTable] = useState('table1');
  const [orders, setOrders] = useState({
    table1: [],
    table2: [],
    table3: []
  });

  useEffect(() => {
    const ordersFromLocalStorage = JSON.parse(localStorage.getItem('orders'));
    if (ordersFromLocalStorage) {
      setOrders(ordersFromLocalStorage);
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      id: uniqueOrderId,
      price: choosePrice,
      dish: chooseDish,
      table: chooseTable
    };

    const updatedOrders = { ...orders, [chooseTable]: [...orders[chooseTable], newOrder] };
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    clearFields();
  };

  const clearFields = () => {
    setUniqueOrderId('');
    setChoosePrice('');
    setChooseDish('');
    setChooseTable('table1');
  };

  const handleDelete = (table, index) => {
    const updatedOrders = { ...orders, [table]: orders[table].filter((order, i) => i !== index) };
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <div className="container">
      <div className="inputs">
        <form onSubmit={handleFormSubmit} className="row g-3">
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="unique-order-id" className="form-label">Unique Order ID</label>
              <input type="number" className="form-control" value={uniqueOrderId} onChange={(e) => setUniqueOrderId(e.target.value)} id="unique-order-id" placeholder="Order ID" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="choose-price" className="form-label">Choose Price</label>
              <input type="number" className="form-control" value={choosePrice} onChange={(e) => setChoosePrice(e.target.value)} id="choose-price" placeholder="Price" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="choose-dish" className="form-label">Choose Dish</label>
              <input type="text" className="form-control" value={chooseDish} onChange={(e) => setChooseDish(e.target.value)} id="choose-dish" placeholder="Dish" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="choose-table" className="form-label">Choose Table</label>
              <select name="choose-table" value={chooseTable} onChange={(e) => setChooseTable(e.target.value)} id="choose-table" className="form-select">
                <option value="table1">Table 1</option>
                <option value="table2">Table 2</option>
                <option value="table3">Table 3</option>
              </select>
            </div>
          </div>
          <div className="col-md-3 text-end">
            <button type="submit" className="add-to-bill">Add to Bill</button>
          </div>
        </form>
      </div>

      <div className="outputs">
        <h2>Orders</h2>
        {Object.keys(orders).map((table, index) => (
          <div key={index} className={`table-${table.slice(-1)}`}>
            <h4>Table {table.slice(-1)}</h4>
            <ul className={`table${table.slice(-1)}-ul`}>
              {orders[table].map((order, idx) => (
                <li key={idx} className="list-items">{order.dish} - ${order.price}
                  <button className="btn btn-dark delete-btn" onClick={() => handleDelete(table, idx)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

