import React, { useState, useEffect, useContext } from 'react';
import { getDatabase, ref, get } from "firebase/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import app from '../config/FirebaseConfig';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Col, Modal, Button } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
//import CustomNavbar from './composants/Navtopbar';
import { Contexttri } from './TriContext';



const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);  
  const[triarg, settriarg]=useState("");
  const whatsappNumber = '+905539423359';
  const{argument, update}=useContext(Contexttri);
 //settriarg(argument);

  useEffect(() => {
    const fetchData = async () => {
      const database = getDatabase(app);
      const productsRef = ref(database, '/');
      try {
        const snapshot = await get(productsRef);
        if (snapshot.exists()) {
          // Convertir les données Firebase en un tableau d'objets
          const productsData = Object.values(snapshot.val().produits);
          //console.log(snapshot.val().produits);
          setProducts(productsData);
        } else {
          console.log("Pas de données disponibles");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData(); // Appeler la fonction fetchData lors du premier rendu
  }, []); // Le tableau vide comme deuxième argument garantit que useEffect s'exécute seulement après le premier rendu

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  const pupup = (e, product) => {
    e.preventDefault();
    setSelectedProduct(product);
    setShowPopup(true);
  };
  
  function trier(val){
     settriarg(val);

  }


  return (
    <div >
        {/* <CustomNavbar  onClick={(arg) => trier(arg)} /> */}
      
     
      <div className="container mt-3">
      <Container style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
      {products
        .filter(product => !argument || product.type === argument)
        .map((product, index) => (
          <Col key={index} style={{ marginBottom: '2px' }}>
            <Card onClick={(e) => pupup(e, product)} style={{ borderRadius: '20px' }}>
              <Card.Img 
                variant="top" 
                src={product.images.im1} 
                alt="Product" 
                style={{ width: '100%', height: '150px', objectFit: "cover", borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
              />
              <Card.Body>
                {/* <Card.Title style={{ fontSize: '1rem' }}>{product.nom}</Card.Title> */}
                <Card.Text style={{ fontSize: '0.9rem' }}>{product.prix} FCFA</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Container>


      <Modal show={showPopup} onHide={handlePopupClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct && selectedProduct.nom}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div>
             
            

<Carousel pause={true} interval={null}>
  <Carousel.Item >
    {selectedProduct && selectedProduct.images && selectedProduct.images.im1 && (
      <img src={selectedProduct.images.im1} alt={selectedProduct.nom} style={{ width: '100%' }} />
    )}
  </Carousel.Item>
  <Carousel.Item >
    {selectedProduct && selectedProduct.images && selectedProduct.images.im2 && (
      <img src={selectedProduct.images.im2} alt={selectedProduct.nom} style={{ width: '100%' }} />
    )}
  </Carousel.Item>
  <Carousel.Item>
    {selectedProduct && selectedProduct.images && selectedProduct.images.im3 && (
      <img src={selectedProduct.images.im3} alt={selectedProduct.nom} style={{ width: '100%' }} />
    )}
  </Carousel.Item>
</Carousel>

             
              <p>Prix: ${selectedProduct.prix}</p>
              {/* Ajoutez d'autres propriétés du produit ici */}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer> <Col>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button variant="secondary" style={{ color: 'white' }}>
        <a  
               href={`https://wa.me/${whatsappNumber}?text=Bonjour%20!%20Je%20vous%20contacte%20afin%20de%20me%20procurer%20le%20produit%20${selectedProduct && selectedProduct.nom}%20au%20prix%20de%20${selectedProduct && selectedProduct.prix}.%20Voici%20le%20lien%20vers%20le%20produit:%20${selectedProduct && selectedProduct.images && selectedProduct.images.im1}`}
               target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'none' }}
                >
          Contacter
        </a>
      </Button>
      <Button variant="secondary" style={{ color: 'white' }} onClick={handlePopupClose}>
        Fermer
      </Button>
    </div>
          </Col>
        </Modal.Footer>
      </Modal>
      
    </div>
    </div>
  );
};

export default ProductsList;
