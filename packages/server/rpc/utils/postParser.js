const { getDateString } = require('../utils/date');

const getImageUrls = (post) => {
  if (!(post.media && post.media.picture && post.extra_media)) return [];
  const imageUrls = post.extra_media.map(media =>
    media.photo,
  );

  imageUrls.unshift(post.media.picture);
  return imageUrls;
};

const getPostActionString = ({ post, profileTimezone, twentyFourHourTime }) => {
  if (post.due_at) {
    const dateString = getDateString(
      post.due_at,
      profileTimezone,
      {
        twentyFourHourTime,
      },
    );
    return `This post will be sent ${dateString}.`;
  } else if (post.shared_next) {
    return 'This post will be shared next.';
  }
};

const getPostDetails = ({
  post,
  profileTimezone,
  twentyFourHourTime,
}) => ({
  postAction: getPostActionString({
    post,
    profileTimezone,
    twentyFourHourTime,
  }),
  isRetweet: post.retweet !== undefined,
});

const getRetweetProfileInfo = (post) => {
  const retweet = post.retweet;
  if (!retweet) {
    return undefined;
  }

  return {
    name: retweet.profile_name,
    handle: `@${retweet.username}`,
    avatarUrl: retweet.avatars.https,
  };
};

const getPostType = ({ post }) => {
  if (!post.media || post.retweet) {
    return 'text';
  } else if (post.media && post.media.picture && !post.extra_media) {
    return 'image';
  } else if (post.media && post.media.picture && post.extra_media) {
    return 'multipleImage';
  } else if (post.media && post.media.video) {
    return 'video';
  } else if (post.media && post.media.link) {
    return 'link';
  }
  return 'text';
};

module.exports = {
  postsMapper: (post) => {
    const media = post.media || {};
    const isVideo = media.video;
    let retweetComment;
    let text;

    if (post.retweet) {
      text = post.retweet.text;
      retweetComment = post.retweet.comment;
    } else {
      text = post.text;
    }
    return {
      id: post.id,
      isConfirmingDelete: post.isDeleting && !post.requestingDraftAction,
      isDeleting: post.isDeleting && post.requestingDraftAction,
      isWorking: !post.isDeleting && post.requestingDraftAction,
      imageSrc: isVideo ? media.thumbnail : media.picture,
      imageUrls: getImageUrls(post),
      links: [], // TODO: parseTwitterLinks(text),
      profileTimezone: 'Europe/London', // TODO: get timezone from profile
      linkAttachment: {
        title: media.title,
        url: media.expanded_link,
        description: media.description,
        thumbnailUrl: media.preview,
      },
      postDetails: getPostDetails({
        post,
        profileTimezone: 'Europe/London', // TODO: get from profile
        twentyFourHourTime: false, // TODO: get from user
      }),
      retweetComment,
      retweetCommentLinks: [], // TODO: parseTwitterLinks(retweetComment),
      retweetProfile: getRetweetProfileInfo(post),
      sent: false,
      text,
      type: getPostType({ post }),
    };
  },
};
