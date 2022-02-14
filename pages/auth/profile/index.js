import Layout from "components/layout";

const Profile = () => {
  return (
    <div className="py-20 px-4">
      <div>
        <div className="bg-custom-blue w-14 h-14 rounded-full" />
        <div>
          <p>Fandy Ahmad Januar Pratama</p>
          <p>Fullstack Developer</p>
          <p>PT BAKAR API</p>
        </div>
        <div>
          <p>NIK</p>
          <p>82593221421214</p>
          <p>Email</p>
          <p>fandybufafb@gmail.com</p>
          <p>No. Telepon</p>
          <p>-</p>
          <p>Alamat</p>
          <p>Jalan Muding Sari Kav. XX No 8</p>
        </div>
        <div>
          <p>Tempat Presensi</p>
          <div>
            <div>
              <p>RedWhite Coffee</p>
              <p></p>
            </div>
            <div>
              <p>Jl Giri Agung I No. 12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.layout = Layout;
export default Profile;
