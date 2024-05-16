const express=require('express')
const router=express.Router()

//importing authMiddleware


const {
    addToWatchlist,
    removeFromWatchlist,
    getWatchlistByEmail
  } =require('../controllers/watchlistController')


router.route('/addToWatchlist').post(addToWatchlist)
router.route('/removeFromWatchlist').post(removeFromWatchlist)
router.route('/watchlist').get(getWatchlistByEmail)

module.exports=router