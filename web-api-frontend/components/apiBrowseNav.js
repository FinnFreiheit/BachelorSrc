import {Drawer, ListItemButton, ListItem, Box} from "@mui/material"
import styles from "../styles/Components.module.css"
import Link from "next/link";
import apiBrowseData from "../services/apiBrowse"


export default function ApiBrowseNav() {


    const drawerWidth = 240;


    const sideNavElements =
        apiBrowseData.map((item) => {
            const urlName = item.name[0].toLowerCase() + item.name.slice(1).replace(".","")
            return (
                <Link key={item.name} href={`/${urlName}`}>
                    <ListItemButton>
                        {item.name}
                    </ListItemButton>
                </Link>
            )
        })


    return (
        <Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent">
                <ListItem className={styles.listHeader}>Api Funktionen</ListItem>
                {sideNavElements}
            </Drawer>
        </Box>
    )
}