import Search from '@/app/ui/dashboard/search/search'
import styles from '@/app/ui/dashboard/users/users.module.css'

const UsersPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a user..."/>
          <Link href='/dashbord/users/add'>
           <button className={styles.addButton}>Add New</button>
       </Link> 
       </div>
        <table className={styles.table}></table>
      </div>
    )
  }
  
  export default UsersPage