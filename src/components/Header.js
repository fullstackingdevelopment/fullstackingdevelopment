function Header() {
  return (
    <div className='Header' style={{
      display: 'flex',
      flexDirection: 'row',
      marginLeft: 30,
    }}>
      <p style={{
        fontSize: 30,
      }}>Full Stack-ing Development</p>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 140,
        marginTop: 10,
      }}>
        <p style={{
          fontSize: 20,
        }}>About us</p>
        <p style={{
          fontSize: 20,
          marginLeft: 80,
        }}>How to contribute</p>
      </div>
    </div>
  );
}

export default Header;