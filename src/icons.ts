import path from 'path';

const getIconPath = (fileName: string): string =>
  path.join(__dirname, '..', 'media', fileName);

export default {
  building: getIconPath('buildingTemplate.png'),
  enqueued: getIconPath('buildingTemplate.png'),
  error: getIconPath('errorTemplate.png'),
  loading: getIconPath('loadingTemplate.png'),
  new: getIconPath('buildingTemplate.png'),
  offline: getIconPath('offlineTemplate.png'),
  processing: getIconPath('buildingTemplate.png'),
  ready: getIconPath('readyTemplate.png'),
  uploaded: getIconPath('buildingTemplate.png'),
  uploading: getIconPath('buildingTemplate.png')
};
