import { Link, Image, gql, useShopQuery, CacheLong } from '@shopify/hydrogen';


export default function FeaturedCollections() {
  const {
    data: { collections },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  });

  return (
    <>
    <div class=" grid  lg:w-full mt-8 mb-5 h-16 w-600 bg-red-700">
      <div className='grid grid-cols-6 bg-yellow-700' >
      <h2>hello</h2>
      </div>

  
  
</div>
    
    <div style={{display:"flex" , justifyContent:"center",backgroundColor:"red", width:"50%",margin:"0 auto" }}>
      
    <h1 style={{color:"white"}}>Acacia</h1>
    <div className='sect' style={{ margin:"20px", backgroundColor:"black" , padding:"20px"}}>
      <h1 style={{color:"white"}}>Acacia</h1>
      <p style={{color:"white"}}>Sustainable, durable and versatile enough for a wide range of kitchen finishes</p>
    {/* <img style={{width:"100%" , height:"60vh"}} src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='img'></img> */}
            </div>
            </div>
    
    <section >


      <h2 >
        <h1 style={{textAlign:"center"}}>Hello Collections</h1>
      </h2>
      <div style={{display:"flex"}} >

      

        {collections.nodes.map((collection) => {
          return (
            <Link key={collection.id} to={`/collections/${collection.handle}`}>
              <div >
                {collection?.image && (
                  <Image
                    className="rounded shadow-border  inline-block  object-cover"
                    width={'50%'}
                    height={330}
                    alt={`Image of ${collection.title}`}
                    data={collection.image}
                  />
                )}
                <h2 >
                  {collection.title}
                </h2>
              </div>
              <div >
                {collection?.image && (
                  <Image
                    className="rounded shadow-border  inline-block  object-cover"
                    width={'50%'}
                    height={330}
                    alt={`Image of ${collection.title}`}
                    data={collection.image}
                  />
                )}
                <h2 >
                  {collection.title}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
    </>
  );
}

const QUERY = gql`
  query FeaturedCollections {
    collections(first: 3, query: "collection_type:smart", sortKey: UPDATED_AT) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;
