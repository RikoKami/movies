import React from 'react';

export default function List(){
  return(
    <section className="list">
      <figure className="card">
        <picture>
          <img src="" alt=""/>
        </picture>
        <figcaption>
          <div className="cardHeader">
            <h3>Thor: Ragnarok</h3>
            <div className="porcentagem">74%</div>
            <div className="date">25/10/2017</div>
            <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto consequuntur ex accusantium esse, voluptate eum fugit in alias, at non eius harum. Ea reiciendis veniam pariatur perspiciatis, libero sapiente commodi?</p>
            <ul className="categorias">
              <li>Ação</li>
              <li>Aventura</li>
              <li>Fantasia</li>
            </ul>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}