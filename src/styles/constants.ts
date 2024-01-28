export const VISIBILTY_ICON_SX = {
  width: '24px',
  height: '24px'
};

export const DONT_HAVE_ACCOUNT_SX = {
  color: '#333333',
  fontSize: '27px',
  lineHeight: '140%',
  textAlign: 'center'
};

export const paperPropsSx = {
  overflow: 'visible',
  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
  mt: 1.5,
  '& .MuiAvatar-root': {
    width: 32,
    height: 32,
    ml: -0.5,
    mr: 1
  },
  '&:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 14,
    width: 10,
    height: 10,
    bgcolor: 'background.paper',
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 0
  }
};

export const TITLE_WITH_BORDER_BOTTOM = {
  paddingBottom: '14px',
  borderBottom: '1px solid rgba(102, 102, 102, 0.25)'
};

export const PRIMARY_BLOG_CARD_IMAGE_CONTAINER = {
  width: { xs: '100%', md: '266px' },
  height: { xs: '250px', md: '180px' },
  borderRadius: '5px'
};

export const PRIMARY_BLOG_CARD_META_DATA_DIVIDER = {
  height: '12px',
  marginLeft: '10px',
  backgroundColor: '#999999'
};

export const PRIMARY_BLOG_CARD_TEXT = {
  color: '#555555',
  fontSize: '15px',
  maxWidth: '540px',
  overflow: 'hidden',
  lineHeight: '150%',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
};

export const BLOG_TEXT = {
  color: '#666666',
  fontSize: '15px',
  marginTop: '40px',
  lineHeight: '150%',
  whiteSpace: 'break-spaces'
};

export const PRIMARY_BLOG_CARD_TITLE = {
  maxWidth: '615px',
  overflow: 'hidden',
  marginTop: '12px',
  textTransform: 'capitalize'
};

export const PRIMARY_PAGINATION_PAGE_BUTTONS = {
  color: '#111111',
  padding: { xs: '5px 5px', md: '13px 16px' },
  fontSize: '15px',
  maxWidth: { xs: '20px', md: '41px' },
  minWidth: '41px',
  maxHeight: { xs: '20px', md: '41px' },
  minHeight: '41px',
  lineHeight: '100%',
  marginLeft: '16px',
  borderRadius: '8px'
};

export const PRIMARY_PAGINATION_NAV_BUTTONS = {
  width: { xs: '55px', md: '105px' },
  height: '41px',
  fontSize: '15px',
  maxWidth: { xs: '55px', md: '105px' },
  minWidth: { xs: '55px', md: '105px' },
  maxHeight: '41px',
  minHeight: '41px',
  borderRadius: '8px',
  textTransform: 'capitalize'
};

export const READ_BLOG_TIME_TO_READ_TAG_CHIP = {
  color: '#111111',
  background: 'rgba(100, 53, 200, 0.12)',
  marginLeft: '20px'
};

export const COMMENT_CARD_USER_NAME = {
  color: '#111111',
  fontSize: '15px',
  fontWeight: '500',
  lineHeight: '150%',
  textTransform: 'capitalize'
};

export const COMMENT_CARD_TIME = {
  color: '#666666',
  fontSize: '15px',
  fontWeight: '500',
  lineHeight: '150%',
  marginLeft: '8px',
  textTransform: 'none'
};

export const COMMENT_CARD_TEXT = {
  color: '#666666',
  fontSize: '15px',
  marginTop: '5px',
  fontWeight: '400',
  lineHeight: '150%',
  textTransform: 'none'
};

export const SHOW_REPLIES_BUTTON = {
  color: '#00A1E7',
  padding: '0',
  fontSize: '15px',
  marginTop: '4px',
  lineHeight: '150%',
  textTransform: 'none'
};

export const SIGN_IN_TO_COMMENT = {
  color: '#00A1E7',
  fontSize: { xs: '18px', md: '27px' },
  fontWeight: '600',
  lineHeight: '140%',
  marginLeft: '40px',
  textTransform: 'none'
};

export const COMMENT_CARD_AVATAR_CONTAINER = {
  minWidth: '32px',
  maxWidth: '32px',
  maxHeight: '32px',
  minHeight: '32px'
};

export const FILE_PICKER_BUTTON = {
  padding: '11px 26px',
  fontSize: '16px',
  lineHeight: '24px',
  borderRadius: '8px',
  textTransform: 'none'
};

export const FILE_PICKER_LABEL = {
  color: '#666666',
  fontSize: { xs: '12px', md: '16px' },
  lineHeight: '24px'
};

export const SELECTED_IMAGE_NAME = {
  color: '#222222',
  fontSize: '16px',
  lineHeight: '24px',
  marginLeft: '15px'
};

export const HEADER_SCROLL_BEHAVIOUR = {
  sticky: 'position:sticky; top:0; box-shadow:0 3px 5px rgba(57, 63, 72, 0.3);',
  nonSticky: 'position: static; box-shadow:none'
};

export const CHAT_NOTIFICATION = {
  color: 'white',
  padding: '3px 9px',
  fontSize: '11px',
  background: 'rgb(213 48 48)',
  marginLeft: '15px',
  borderRadius: '50%'
};
