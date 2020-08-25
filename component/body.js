const Body = props=>(
    <div>
        <body id="page-top">
            <div>
                {props.children}
            </div>
        </body>
        <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
          background-color: yellow;
        }
      `}</style>
    </div>
);

export default Body;