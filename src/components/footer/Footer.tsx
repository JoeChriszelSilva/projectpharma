function Footer() {
  const data = new Date().getFullYear();

  return (
    <div className="flex justify-center bg-blue-950 text-white">
      <div className="container flex flex-col items-center py-4">
        <p className="text-xl font-bold">PROJECT PHARMA | Copyright: {data}</p>

        <p className="text-lg">&copy; Criado por Joe Chriszel</p>
      </div>
    </div>
  );
}

export default Footer;
