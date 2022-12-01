import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [user, setUsers] = useState(null);

  console.log(location);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [id]);
  return (
    <div>
      <h2>Kullanıcı Detayları</h2>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
      <Link to={`/users/${Number(id)+1}`}>Sonraki Kullanıcı</Link>
    </div>
  );
}

export default UserDetail;
