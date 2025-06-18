import Layout from "../components/Layout";

export default function CV() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">My CV</h1>
      <p className="text-lg">
        You can{" "}
        <a
          href="/Adedotun_Adeeko_Business-Tech_Transition_CV_FULL.docx"
          className="text-blue-600 underline hover:text-blue-800"
          download
        >
          download my updated CV here
        </a>
        .
      </p>
    </Layout>
  );
}