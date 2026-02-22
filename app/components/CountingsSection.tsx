export default function CountingsSection() {
  return (
    <section id="countings" className="bg-white py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <h2 className="text-center text-[clamp(2rem,3.8vw,3rem)] font-bold text-[#2c2c2c]">
          Global HR System by the Numbers
        </h2>

        <div className="mt-10 grid gap-10 lg:max-w-4xl mx-auto text-center md:grid-cols-3">
          <div>
            <p className="text-[clamp(2.6rem,5vw,4rem)] font-bold text-[#b79a73]">
              150+
            </p>
            <p className="mt-2 text-sm text-[#3f3f3f]">
              Countries where we process multi-currency payroll
            </p>
          </div>
          <div>
            <p className="text-[clamp(2.6rem,5vw,4rem)] font-bold text-[#b79a73]">
              92%
            </p>
            <p className="mt-2 text-sm text-[#3f3f3f]">
              Customer queries resolved on the first contact
            </p>
          </div>
          <div>
            <p className="text-[clamp(2.6rem,5vw,4rem)] font-bold text-[#b79a73]">
              22,900
            </p>
            <p className="mt-2 text-sm text-[#3f3f3f]">
              Hours saved annually, saving companies $780,000
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-[28px] bg-[#d9efc5] px-6 py-12 text-center md:px-12">
          <p className="text-sm text-[#2f2f2f]">Our purpose</p>
          <h3 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] tracking-tighter font-bold text-[#2c2c2c]">
            To unlock the true potential of
            <br />
            organisations and their people
          </h3>
          <button className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#2c2c2c] shado">
            Join us
          </button>
        </div>
      </div>
    </section>
  );
}
