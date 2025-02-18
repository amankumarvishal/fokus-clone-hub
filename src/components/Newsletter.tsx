
const Newsletter = () => {
  return (
    <section className="bg-fokus-gray py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-clash text-3xl md:text-4xl mb-6">
            Join Our Newsletter
          </h2>
          <p className="text-fokus-text mb-8">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-fokus-black focus:outline-none focus:ring-2 focus:ring-fokus-black"
            />
            <button
              type="submit"
              className="bg-fokus-black text-white px-8 py-3 hover:bg-black transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
